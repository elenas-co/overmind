# Using Overmind with Vue

There are two approaches to connecting Overmind to Vue.

```marksy
h(Notice, null, "Please use Vue version **2.6** or later".)
```

## Plugin

Vue has a plugin system that allows us to expose Overmind to all components. This allows minimum configuration and you just use state etc. from any component.

```marksy
h(Example, { name: "guide/usingovermindwithvue/connect_plugin" })
```

If you rather want to expose state, actions and effects differently you can configure that.

```marksy
h(Example, { name: "guide/usingovermindwithvue/connect_plugin_config" })
```

### Rendering
Any state accessed in the component will cause the component to render when a mutation occurs on that state. Overmind actually uses the same approach to change detection as Vue itself. When using the plugin any component can access any state, though the only overhead that is added to the application is an instance of a "tracking tree" per component. This might sound scary, but it is a tiny little object that adds a callback function to Overmind as long as the component lives. These tracking trees are even reused as components unmount.

### Pass state as props

If you pass anything from the state to a child component it will just work out of the box. The child component will "rescope" the property to its own tracking tree. This ensures that the property you passed is tracked within that component.

```marksy
h(Example, { name: "guide/usingovermindwithvue/passprops_plugin" })
```

### State effects

To run effects in components based on changes to state you use the **reaction** function in the lifecycle hooks of Vue.

```marksy
h(Example, { name: "guide/usingovermindwithvue/effect" })
```

## Connect

If you want more manual control of what components connect to Overmind you can use the connector.

```marksy
h(Example, { name: "guide/usingovermindwithvue/connect" })
```

You can also expose parts of the configuration on custom properties of the component:

```marksy
h(Example, { name: "guide/usingovermindwithvue/connect_custom" })
```

You can now access the **admin** state and actions directly with **state** and **actions**.


## Computed

Vue has its own observable concept that differs from Overmind. That means you can not use Overmind state inside a computed and expect the computed cache to be busted when the Overmind state changes. But computeds are really for caching expensive computation, which you will not do inside a component using Overmind anyways.

What you might want is to introduce some logic, maybe combine some data from props. You can do so using a getter on your **data**.

```marksy
h(Example, { name: "guide/usingovermindwithvue/computed" })
```
