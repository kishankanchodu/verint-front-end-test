# Front-end Engineer Pair Programming Exercise

## Preface

At Verint: Appointment and Queuing we utilise a range of front-end technologies which make up our stack. We're evolving our existing and greenfield applications to make use of a more modern set of technologies. We make use of React on both the web with React-DOM and on mobile devices using React-Native.

This exercise is intended to give you an idea into the technology stack we're currently using along with experiencing the domain we apply these technologies towards. This is not seen as a test and there are no right or wrong answers, we're open to your ideas and opinions in regards to how you feel the below problem could be best solved.

## The exercise

Within this repository you will find a project created with create-react-app, some of the features have been partially implemented however we would like you to revisit them and complete the implementation.

The application should have the following capabilities:
- Ability to list the current customers within a Queue (This has been partially implemented)
    - Make a request to the Qudini Mock API and display the list of customers along with their expected time.
    - A `<Customer />` component was created by the previous engineer which you can use to render the content.
- Fetch the profile image of the customer using the Gravatar Image request API (https://docs.gravatar.com/sdk/images/).
- Ability to filter the list of returned customers using a text input component above the list.
- Ability to refresh the list of customers every `30 seconds`.
- Styling 

We would like to see the following practised within the implementation:
- Test coverage applied where needed.
- Some form of state management.
- Refactoring of old code where needed.

You’re free to use any 3rd party library or framework if you can justify the need.

If for some reason you are unable to run the project on your local machine you can use https://codesandbox.io/p/sandbox/r49ypl

## Submission
The completed project should be shared via a public `Github` repo.


