1. What problem does the context API help solve?

    -By storing state in a context object, we can avoid prop drilling and ensure that state is only being passed to components that need it.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    -Actions are created and then called by some event in our code and are then dispatched with a payload to the reducer. The reducer then uses the data in this payload to create or update state after which it passes the new state back to our components. The reducer lives within the store which in turn contains the entire state tree of the application. It is for this reason that it's known as the 'single source of truth'.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    -Application state exists above all the components in our code, while component state, oddly enough, exists within an individual component. Application state is most useful when several components nested at different levels all require the same state. On the other hand, component state is useful when only one component or its direct children need access to state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    -Redux Thunk is a middleware that allows us to make the flow from actions to the reducer asynchronous. This means that we can run a function like an API call within the action itself.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    -I prefer Redux to Context primarily because I'm more familiar with it, given how much practice we've had this week. I also appreciate how I can follow each step to understand how the state is being managed. I felt that context was doing a lot more under the hood and I couldn't really explain why it was working, but with Redux I feel that I have a much more explicit understanding of the process.