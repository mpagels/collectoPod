import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowBack } from '../assets/svg/forward-white-24dp.svg'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export default function Settings({ lastVisit, setLastVisit }) {
  const [list, setList] = useState(getItems(lastVisit))
  return (
    <Screen>
      <Headline>
        <Link to="/">
          <ArrowBack style={ArrowStyle} />
        </Link>
        <AppTitle>Settings</AppTitle>
      </Headline>
      <DragWrapper>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {list.map((item, index) => (
                  <Draggable
                    key={item.podcast}
                    draggableId={item.podcast}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <PodcastItemWrapper
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.podcast}
                        <input
                          type="checkbox"
                          onChange={() => handleIsActive(index)}
                          checked={item.isActive}
                        ></input>
                      </PodcastItemWrapper>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </DragWrapper>
    </Screen>
  )

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const newList = reorder(list, result.source.index, result.destination.index)

    setList(newList)
  }

  function handleIsActive(index) {
    const newList = [...list]
    const lengthOfNewList = newList.length
    const isNotAllDeactivate = newList.filter((obj) => obj.isActive)
    console.log(isNotAllDeactivate.length)
    if (isNotAllDeactivate.length > 1 || newList[index].isActive === false) {
      newList[index].isActive = !newList[index].isActive
      setList(newList)
    }
  }

  /*   function handleSave() {
    setlastVisit()
  } */
}

const ArrowStyle = {
  transform: 'rotate(180deg)',
  justifySelf: 'start',
  alignSelf: 'center',
}

const AppTitle = styled.h1`
  text-align: center;
  margin: 10px 0 0 0;
  font-family: 'Do Hyeon', sans-serif;
`
const Screen = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  height: 100vh;
  width: 100%;
  grid-template-areas:
    'header'
    'main';
`

const Headline = styled.header`
  font-family: 'Do Hyeon', sans-serif;
  height: 100%;
  margin: 0;
  padding: 15px;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-area: header;
`

const DragWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
`

const PodcastItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
`
// react-beautiful-dnd settings

const getItems = (data) => {
  const crimePodcast = []
  Object.keys(data).forEach((key) => {
    if (data[key].genre === 'crime') {
      crimePodcast.push({ ...data[key], podcast: key })
    }
  })
  return crimePodcast
}

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const grid = 1

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `5px 0 ${grid}px 0`,
  height: 'auto',

  // change background colour if dragging
  background: isDragging ? 'grey' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
  radiusBorder: '15px',
})

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver
    ? 'var(--main-background-grey)'
    : 'var(--main-background-grey)',
  padding: grid,
  width: 250,
})
