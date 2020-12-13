beforeEach(() => {
  cy.visit('/')
})

describe('Visits collectoPod', () => {
  it('checks if all the content is displayed correctly', () => {
    cy.contains('collectoPod')
    cy.contains('Your favorite podcasts in one place')
    cy.get('svg')
    cy.contains('crime')
    cy.contains('other')
    cy.get(
      '[href] > .CrimeNav__NavigateTo-sc-1dr41c-1 > [data-cy=newContent]'
    ).should('have.length', 5)
  })

  it('checks if "NEUER INHALT" tag works correctly', () => {
    cy.get(
      '[href="/verbrechen-von-nebenan"] > .CrimeNav__NavigateTo-sc-1dr41c-1 > [data-cy=newContent]'
    ).as('newDataVerbrechen')
    cy.get(
      '[href="/mordlust"] > .CrimeNav__NavigateTo-sc-1dr41c-1 > [data-cy=newContent]'
    ).as('newDataMordlust')
    cy.get(
      '[href="/zeit-verbrechen"] > .CrimeNav__NavigateTo-sc-1dr41c-1 > [data-cy=newContent]'
    ).as('newDataZeitVerbrechen')
    cy.get(
      '[href="/darfs-ein-bisserl-mord-sein"] > .CrimeNav__NavigateTo-sc-1dr41c-1 > [data-cy=newContent]'
    ).as('newDataBisserlMord')
    cy.get(
      '[href="/verbrechen-der-vergangenheit"] > .CrimeNav__NavigateTo-sc-1dr41c-1 > [data-cy=newContent]'
    ).as('newDataVerbrechenDerVergangenheit')

    cy.get('@newDataVerbrechen').should('exist')
    cy.get('@newDataVerbrechen').should('exist')
    cy.get('@newDataMordlust').should('exist')
    cy.get('@newDataZeitVerbrechen').should('exist')
    cy.get('@newDataBisserlMord').should('exist')
    cy.get('@newDataVerbrechenDerVergangenheit').should('exist')

    cy.get('[href="/verbrechen-von-nebenan"]').click()
    cy.contains('Verbrechen von nebenan')
    cy.contains('READ MORE...')
    cy.contains('DOWNLOAD')
    cy.get('.Podcast__PodcastContent-nqax5u-3').scrollTo('bottom')
    cy.get('svg').click()
    cy.get('@newDataVerbrechen').should('not.exist')

    cy.get('[href="/mordlust"]').click()
    cy.contains('Mordlust')
    cy.contains('READ MORE...')
    cy.contains('DOWNLOAD')
    cy.get('svg').click()
    cy.get('@newDataMordlust').should('not.exist')

    cy.get('[href="/zeit-verbrechen"]').click()
    cy.contains('Zeit Verbrechen')
    cy.contains('READ MORE...')
    cy.contains('DOWNLOAD')
    cy.get('svg').click()
    cy.get('@newDataZeitVerbrechen').should('not.exist')

    cy.get('[href="/darfs-ein-bisserl-mord-sein"]').click()
    cy.contains("Darf's ein bisserl Mord sein?")
    cy.contains('READ MORE...')
    cy.contains('DOWNLOAD')
    cy.get('svg').click()
    cy.get('@newDataBisserlMord').should('not.exist')

    cy.get('[href="/verbrechen-der-vergangenheit"]').click()
    cy.contains('Verbrechen der Vergangenheit')
    cy.contains('READ MORE...')
    cy.contains('DOWNLOAD')
    cy.get('svg').click()
    cy.get('@newDataVerbrechenDerVergangenheit').should('not.exist')
  })
  /*   it('checks if localStorage is set correctly', () => {
    expect(localStorage.getItem('lastVisited')).to.be.null

    cy.contains('crime')
    cy.window().then((window) =>
      expect(window.localStorage.getItem('lastVisited')).to.eq(`{
            'verbrechen-von-nebenan': { lastVisited: 0 },
            mordlust: { lastVisited: 0 },
            'zeit-verbrechen': { lastVisited: 0 },
            'darfs-ein-bisschen-mord-sein': { lastVisited: 0 },
            'verbrechen-der-vergangenheit': { lastVisited: 0 },
            'revisiting-sunnydale': { lastVisited: 0 },
            'rescherschen-und-arschiv': { lastVisited: 0 },
            'zeit-pfarrerstoechter': { lastVisited: 0 },
            'eine-stunde-history': { lastVisited: 0 },
            'spezialgelagerter-sonderpodcast': { lastVisited: 0 },
            'ndr-corona-update': { lastVisited: 0 },
          }`)
    )
  }) */
})
