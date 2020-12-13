beforeEach(() => {
  cy.visit('/')
})

describe('Visits collectoPod', () => {
  it('checks if all the content is displayed correctly (data from real mongo)', () => {
    cy.contains('collectoPod')
    cy.contains('Your favorite podcasts in one place')
    cy.get('svg')
    cy.contains('crime')
    cy.contains('other')
    cy.get(
      '[href] > .CrimeNav__NavigateTo-sc-1dr41c-1 > [data-cy=newContent]'
    ).should('have.length', 5)
  })

  it('checks if "NEUER INHALT" tag works correctly (with fixture data)', () => {
    cy.intercept('api', { fixture: 'api.json' })
    // crime selection
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

    // other selection

    cy.contains('other').click()
    cy.get(
      '[href="/ndr-corona-update"] > .OtherNav__NavigateTo-sc-9wg02j-1 > .OtherNav__New-sc-9wg02j-2'
    ).as('newDataCorona')
    cy.get(
      '[href="/spezialgelagerter-sonderpodcast"] > .OtherNav__NavigateTo-sc-9wg02j-1 > .OtherNav__New-sc-9wg02j-2'
    ).as('newDataSpezialgelagerterSonderpodcast')
    cy.get(
      '[href="/revisiting-sunnydale"] > .OtherNav__NavigateTo-sc-9wg02j-1 > .OtherNav__New-sc-9wg02j-2'
    ).as('newDataRevisitingSunnydale')
    cy.get(
      '[href="/eine-stunde-history"] > .OtherNav__NavigateTo-sc-9wg02j-1 > .OtherNav__New-sc-9wg02j-2'
    ).as('newDataEineStundeHistory')
    cy.get(
      '[href="/rescherschen-und-arschiv"] > .OtherNav__NavigateTo-sc-9wg02j-1 > .OtherNav__New-sc-9wg02j-2'
    ).as('newDataRescherschenUndArschiv')
    cy.get(
      '[href="/zeit-pfarrerstoechter"] > .OtherNav__NavigateTo-sc-9wg02j-1 > .OtherNav__New-sc-9wg02j-2'
    ).as('newDataZeitFfarrerstoechter')

    cy.get('@newDataCorona').should('exist')
    cy.get('@newDataSpezialgelagerterSonderpodcast').should('exist')
    cy.get('@newDataRevisitingSunnydale').should('exist')
    cy.get('@newDataEineStundeHistory').should('exist')
    cy.get('@newDataRescherschenUndArschiv').should('exist')
    cy.get('@newDataZeitFfarrerstoechter').should('exist')
  })
  it('checks if localStorage is set correctly (with fixture data)', () => {
    cy.intercept('api', { fixture: 'api.json' })
    expect(localStorage.getItem('lastVisited')).to.be.null
    cy.get('[href="/verbrechen-von-nebenan"]').click()
    cy.get('svg')
      .click()
      .should(() => {
        expect(localStorage.getItem('lastVisited')).to.exist
        const ls = JSON.parse(localStorage.getItem('lastVisited'))
        expect(ls['verbrechen-von-nebenan'].lastVisited).to.be.greaterThan(0)
        expect(ls['mordlust'].lastVisited).to.equal(0)
        expect(ls['zeit-verbrechen'].lastVisited).to.equal(0)
        expect(ls['darfs-ein-bisschen-mord-sein'].lastVisited).to.equal(0)
        expect(ls['verbrechen-der-vergangenheit'].lastVisited).to.equal(0)
      })
    cy.get('[href="/mordlust"]').click()
    cy.get('svg')
      .click()
      .should(() => {
        expect(localStorage.getItem('lastVisited')).to.exist
        const ls = JSON.parse(localStorage.getItem('lastVisited'))
        expect(ls['verbrechen-von-nebenan'].lastVisited).to.be.greaterThan(0)
        expect(ls['mordlust'].lastVisited).to.be.greaterThan(0)
        expect(ls['zeit-verbrechen'].lastVisited).to.equal(0)
        expect(ls['darfs-ein-bisschen-mord-sein'].lastVisited).to.equal(0)
        expect(ls['verbrechen-der-vergangenheit'].lastVisited).to.equal(0)
      })
    cy.get('[href="/zeit-verbrechen"]').click()
    cy.get('svg')
      .click()
      .should(() => {
        expect(localStorage.getItem('lastVisited')).to.exist
        const ls = JSON.parse(localStorage.getItem('lastVisited'))
        expect(ls['verbrechen-von-nebenan'].lastVisited).to.be.greaterThan(0)
        expect(ls['mordlust'].lastVisited).to.be.greaterThan(0)
        expect(ls['zeit-verbrechen'].lastVisited).to.be.greaterThan(0)
        expect(ls['darfs-ein-bisschen-mord-sein'].lastVisited).to.equal(0)
        expect(ls['verbrechen-der-vergangenheit'].lastVisited).to.equal(0)
      })
    cy.get('[href="/darfs-ein-bisserl-mord-sein"]').click()
    cy.get('svg')
      .click()
      .should(() => {
        expect(localStorage.getItem('lastVisited')).to.exist
        const ls = JSON.parse(localStorage.getItem('lastVisited'))
        expect(ls['verbrechen-von-nebenan'].lastVisited).to.be.greaterThan(0)
        expect(ls['mordlust'].lastVisited).to.be.greaterThan(0)
        expect(ls['zeit-verbrechen'].lastVisited).to.be.greaterThan(0)
        expect(
          ls['darfs-ein-bisschen-mord-sein'].lastVisited
        ).to.be.greaterThan(0)
        expect(ls['verbrechen-der-vergangenheit'].lastVisited).to.equal(0)
      })
    cy.get('[href="/verbrechen-der-vergangenheit"]').click()
    cy.get('svg')
      .click()
      .should(() => {
        expect(localStorage.getItem('lastVisited')).to.exist
        const ls = JSON.parse(localStorage.getItem('lastVisited'))
        expect(ls['verbrechen-von-nebenan'].lastVisited).to.be.greaterThan(0)
        expect(ls['mordlust'].lastVisited).to.be.greaterThan(0)
        expect(ls['zeit-verbrechen'].lastVisited).to.be.greaterThan(0)
        expect(
          ls['darfs-ein-bisschen-mord-sein'].lastVisited
        ).to.be.greaterThan(0)
        expect(
          ls['verbrechen-der-vergangenheit'].lastVisited
        ).to.be.greaterThan(0)
      })
  })
})
