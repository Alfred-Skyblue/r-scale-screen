## r-scale-screen

If you are using Vue, move to [v-scale-screen](https://github.com/Alfred-Skyblue/v-scale-screen)

English | [简体中文](./README.zh_CN.md)

Large-screen adaptive container component, which can be used for large-screen project development, realizes screen adaptation, and can be adaptive according to width, height, and width and height ratios, and full-screen adaptation

### Demo

![图例](./dev/assets/scale_screen.gif)

### Install

```bash
npm install r-scale-screen
# or
yarn add r-scale-screen
```

#### Usage

```tsx
import RScaleScreen from 'r-scale-screen'

function App() {
  return (
    <>
      <RScaleScreen height={1080} width={1920}>
          <ReactECharts>....</ReactECharts>
          <ReactECharts>....</ReactECharts>
          <ReactECharts>....</ReactECharts>
          <ReactECharts>....</ReactECharts>
          <ReactECharts>....</ReactECharts>
      </RScaleScreen>
    </>
  )
}
```

### API

| Property           | Description                                                                                                                                                                                                                                                                                                    | Type                             | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| width              | Large screen width                                                                                                                                                                                                                                                                                             | `Number` or `String`             | 1920    |
| height             | Large screen height                                                                                                                                                                                                                                                                                            | `Number` or `String`             | 1080    |
| autoScale          | Adaptive configuration, when configured as a boolean type, it is to enable or disable the adaptive configuration. When configured as an object, if x is true, the x-axis generates a margin; when y is true, the y-axis generates a margin. This configuration is enabled when the full screen is enabled fail | Boolean or {x:boolean,y:boolean} | true    |
| delay              | Window resize delay time                                                                                                                                                                                                                                                                                       | Number                           | 500     |
| fullScreen         | Full-screen self-adaptive, there will be a stretching effect when this configuration item is enabled, and auto Scale will be invalid. It is not recommended to enable it if it is not necessary                                                                                                                | Boolean                          | false   |
| boxStyle           | Modify the container style, such as the side background color when displaying in the center, conforming to the Vue two-way binding style standard format                                                                                                                                                       | Object                           | null    |
| wrapperStyle       | Modify the adaptive area style to conform to the Vue two-way binding style standard format                                                                                                                                                                                                                     | Object                           | null    |
| bodyOverflowHidden | After enabling, the body style will be automatically set to `overflow: hidden`                                                                                                                                                                                                                                 | Boolean                          | true    |
