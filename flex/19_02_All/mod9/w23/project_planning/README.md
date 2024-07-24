# Project Planning

- [x] What are projects? What is project management?
- [x] Types/Methodologies of project planning
  - [x] Waterfall
  - [x] Agile
  - [x] Scrum
- [x] How to Plan a Software Project

## Projects - what the heck are they

- loosely - defined as an undertaking which delivers at its close a product of value

* These two key parts - what is value, and what is its close, drive the concept of requirements
* "Definition of Done"
* Most projects will have some kidn of planning process to outline this all -
* In software, a portfolio site, maybe something bigger with a CMS, and larger applications like with databases, backends
* All of these are projects and can benefit from project management principles

## Types of Project Planning

- Unsolved problem - how best to manage a project
- In software, today, there are two leading consensus philosophies
- Waterfall, and Agile

### Waterfall

- waterfall is sort of the "classical" engineering management philsophy

PROS

- Intuitive - very structured
- Organized - easy to measure progress
- Documentation tends to be great
- Tend to waste less code
- One price!
- Less maintenance?? ****\*\*****

CONS

- Too rigid? Less flexible to changes
- Planning process is long (long == expensive)
- Low Utilization
- Roadblocks are common
- No client feedback til the end

### Agile

- took off in 2001
- Manifesto for Agile Software Development
- A focus on individuals and interactions rather than processes and tools
- Software that works prioritized over documentation
- Collaboration with customer instead of contract negotiation.
- Responding to change over following a plan

- Agile tends to revolve around continuous delivery
- lots of entry points for change

PROS

- Speed!
- Client satisfaction!
- Avoid building stuff they don't want
- High Utilization

CONS

- Messy? Lots of refactoring and throwing out code
- Never ends - definition of done?
- Hard to work as a team?
- Dependent on individual contributors
- Documentation suffers
- Lack of follow through can be harmful

## Scrum (implementation of agile)

- Scrum posits that small teamsn (10 or fewer) who self-organize works best
  - the team is cross-functional

* Products are broken down into the smallest valuable pieces possible.
* The group works in what's called a sprint, which is usually 1-4 weeks in length
* Along the way in a sprint, you will have daily scrum meetings (scrums, standups)
* at the end of a sprint, you will have two meetings.
  - Sprint Review - demo the product to the client
  - Sprint Retrospective - self evaluation

### Scrum Teams

- Product Owner - liaison between the business/client and the developer
  - they will own The Backlog™
- Developers - That's you! They make the stuff
- Scrum Master - A coach, run interference, remove blockers, keep the team performance high

### The Backlog™

- Product Owner translates business needs into user stories
  - Prioritizes them
  - maintains the list
  - beginning of a sprint, the devs pick off stories from the top of the list
  - Stories are sized (fibonacci)
    0, 1, 1, 2, 3, 5, 8, 13

## Planning out a Project

### The Steps

1. User Stories (Extract Nouns / Tables)
2. Database (Identify Relationships)
3. ERD (Consider use of Draw.IO or Vizio)
4. Routes
5. Wireframes (Consider use of Figma) [and Design]
6. Set up GitHub Together
7. Set up the Project Structure and Naming Conventions Together (Consider a Style-Guide for [JavaScript](https://airbnb.io/javascript/) / [Ruby](https://rubystyle.guide/) / [CSS](http://smacss.com/))
8. Decide on Workflow and Tasks (Consider use of [Trello](https://trello.com/), [Asana](https://asana.com/), or [Jira](https://www.atlassian.com/software/jira))
9. Communication ([Slack](https://slack.com/), E-Mail, [Discord](https://discord.com/), [Google Meet](https://meet.google.com))

### Kanban

Kanban is a style of transparent communication across a team, detailing both the current and upcoming tasks and their progress. There are usually at least 3 columns on such a board:

1. Tasks Requiring Attention
2. In-Progress Work
3. Completed Work

Anyone visiting the board can immediately understand how much work is left, completed, and who is working on what (colour co-ordination and easy visual-indicators help observers understand at a glance.)

### How do I Timeline?

* At the start this is difficult... how do you know how long something will take?
* Leave your judgement at the door, and begin *tracking your time*
* [Harvest](https://www.getharvest.com/), [Tickspot](https://www.tickspot.com/), [Alternatives?](https://alternativeto.net/software/tickspot/)
  * Leave detailed notes or categorize your work
  * When quoting new projects you can review this to see how long on average these sorts of tasks have been taking
* With a good idea of how long things take, you can let yourself, your employer, and clients know how long things might take (add 10-20%+ in padding in case there is a complication)
* Don't fall victim to the [mythical man-month](https://en.wikipedia.org/wiki/The_Mythical_Man-Month#Ideas_presented)
  * Group intercommunication formula: n(n - 1)/2

## Organization

* Take notes!
  * Meeting, planning, research... these are all opportunities to make a note for later
  * Tools: [EverNote](https://evernote.com/), [Inkdrop](https://www.inkdrop.app/)
* Have a calendar!
  * For meetings and core dates, it can be easy to double-book, miss something, or simply forget
  * Use [Google Calendar](https://calendar.google.com/) (or a similar app), it can notify you on your phone, in your e-mail, etc. about scheduled meetings and any changes—get in the habit of checking it often!
* Have a schedule!
  * Protect work-time and relaxation time
  * You need focus-hours in the day where interruptions can be minimized
  * Avoid social media and other distractions when working—sometimes it helps to have separate accounts on your OS, or two devices, one for work and one for leisure
  * Have set times for relaxation to ensure you're taking breaks—protect an evening with the family, etc.
  * Still having trouble focusing? Consider the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) and use of [online timers](https://pomofocus.io/):
    1. Decide on a task
    2. Work on the task for ~25 minutes
    3. Take a break (5-10 minutes)
    4. Repeat the above 3 times
    5. Take a 20-30 minute break and return to step 1
  * Know your favourite documentation
    * Warren's favourite! The [O'Reilly Safari series](https://www.oreilly.com/library/view/the-ruby-programming/9780596516178/)
    * There are tools for grabbing main / trusted docs in one-place for your convenience like [DevDocs](https://devdocs.io/)
    * Going to do some work at the park? No internet there? No problem, grab an offline documenation tool (just remember to download the necessary docs before heading out!)
      * MacOS: [Dash](https://kapeli.com/dash)
      * Windows: [Velocity](https://velocity.silverlakesoftware.com/)
      * Linux: [Zeal](https://zealdocs.org/)

## Resources

* [Agile versus Waterfall](https://www.atlassian.com/agile/project-management/project-management-intro)
* [User Stories](https://www.atlassian.com/agile/project-management/user-stories)
* [Kanban](https://www.atlassian.com/agile/kanban/boards)
* [ERD Drawing Tools](https://sharingknowledge.world.edu/5-best-entity-relationship-diagram-erd-tools/)
* [Wireframe Tools](https://webflow.com/blog/wireframe-tools)
* [Note-Taking Apps](https://www.techradar.com/best/best-note-taking-app)