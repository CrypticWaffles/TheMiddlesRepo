# The Middles Repo (e-voter)
This repository contains the source code for "e-voter", a web application built with the Sails.js framework. The platform allows users to view legislative video content, cast votes on them, and provide feedback. It also includes functionality to look up location data based on a user's ZIP code to potentially tailor content.

## Features

*   **Video Viewing:** Users can browse a list of videos and play them directly in the browser.
*   **Voting System:** A simple "Yes/No" voting mechanism is attached to videos.
*   **Location Lookup:** Fetches and displays city and state information based on a provided ZIP code, saving the data for future use.
*   **Feedback Submission:** A dedicated page for users to submit written feedback.

## Technology Stack

*   **Backend:** Sails.js v1.5, Node.js
*   **Frontend:** EJS (Embedded JavaScript templates), LESS for styling
*   **Database:** PostgreSQL
*   **Real-time Communication:** Socket.io (via Sails)
*   **Build Tool:** Grunt.js

## Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v22.13 or later as specified in `package.json`)
*   [NPM](https://www.npmjs.com/)
*   [PostgreSQL](https://www.postgresql.org/)

### Database Setup

1.  Ensure your PostgreSQL server is running.
2.  Create a new database named `evoter`.
3.  Create a user named `evoter_user` with the password `your_secure_password`.
4.  Grant the necessary privileges to the user on the `evoter` database.
5.  Optionally, you can modify the connection URL in `config/datastores.js` to match your local PostgreSQL configuration.

    ```javascript
    // config/datastores.js
    module.exports.datastores = {
      default: {
        adapter: 'sails-postgresql',
        url: 'postgresql://evoter_user:your_secure_password@localhost:5432/evoter'
      }
    };
    ```

### Installation & Running

1.  Clone the repository:
    ```sh
    git clone https://github.com/crypticwaffles/themiddlesrepo.git
    cd themiddlesrepo
    ```

2.  Install the NPM packages:
    ```sh
    npm install
    ```

3.  Start the Sails.js application:
    ```sh
    sails lift
    ```
    This will start the server, typically on `http://localhost:1337`. When Sails lifts for the first time, it will automatically run the database migrations (`migrate: 'alter'`) to create the necessary tables (`Video`, `Vote`, `Location`, `Feedback`).

### Seeding Data

To use the video viewing and voting features, you will need to manually add records to the `video` table in your `evoter` database. The table has `title` (string) and `url` (string) columns.

## Application Structure

*   **/api**: Contains the backend logic, including models, controllers, and helpers.
    *   `controllers`: Handle incoming requests (e.g., `VideoController.js`, `VoteController.js`).
    *   `models`: Define the database schema (e.g., `Video.js`, `Vote.js`).
*   **/assets**: Contains frontend assets like stylesheets, client-side JavaScript, and images.
*   **/config**: Application configuration files, including routes, database connections (`datastores.js`), and policies.
*   **/views**: EJS templates for the user interface.
    *   `pages`: Individual page views (e.g., `homepage.ejs`, `videoList.ejs`).
    *   `layouts`: The main layout file (`layout.ejs`) that wraps the page content.

## API Endpoints

The application exposes the following routes and API endpoints:

| Method | Path                   | Controller/View          | Description                                |
| :----- | :--------------------- | :----------------------- | :----------------------------------------- |
| `GET`  | `/gp/`                   | `pages/homepage.ejs`     | Displays the homepage.                     |
| `GET`  | `/gp/feedback`           | `pages/feedback.ejs`     | Displays the feedback submission page.     |
| `POST` | `/gp/feedback`           | `FeedbackController.create` | Submits user feedback.                     |
| `GET`  | `/gp/location`         | `pages/location.ejs`     | Displays the ZIP code lookup page.         |
| `GET`  | `/gp/api/location`       | `LocationController.find`   | Looks up location data by ZIP code.        |
| `GET`  | `/gp/video/list`         | `VideoController.list`      | Displays a list of all available videos.   |
| `GET`  | `/gp/video/play/:id`     | `VideoController.play`      | Displays a specific video for playback/voting. |
| `POST` | `/gp/vote`               | `VoteController.vote`       | Submits a vote for a video.                |
