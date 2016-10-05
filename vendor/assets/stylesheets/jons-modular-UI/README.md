### Name of selectors for componentes
```
.MyComponent {}
.MyComponent.is-animating {}
.MyComponent--modifier {}

.MyComponent-part {}
.MyComponent-anotherPart {}
```

### Structure of components with Sass
```
@import 'variables';

.Container{
  background: $color-container;
  border-radius: $container-radius;
  overflow: auto;
  padding: 0 15px;
  box-shadow: $container-shadow;

  &-heading{
    display: inline-block;
    margin: 0 0 12px 0;

    & h2{
      font-size: 18px;
    }
  }

  &-body{
    display: block;
    padding: 6px 0;
  }

  &-footer{
    padding: 12px 0;
  }
}

```

### Using modular media-queries in components
```
.Section{
  border-bottom: 1px solid $border-color;
  padding: 0 0 35px 0;

  &-header{
    padding: 15px 0 10px;
    overflow: auto;
  }

  &-title{
    font-family: $font-title;
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 1.1em;
    text-align: left;
    float: left;
    margin-top: 0;
    margin-bottom: 10px;
    @include mobile{
      text-align: center;
      float: none;
    };

    &:hover{
      color: $grey;
      text-decoration: underline;
    }
  }
```

### Using Grids
```
<div class="Grid">
  <div class="Grid-cell u-size1of2 u-before1of4 u-after1of4">
    Meu conteudo ou divs
  </div>
</div>
```

##### Available classes

`Grid`: core component

`Grid--alignCenter`: center-align all child Grid-cell

`Grid--alignRight`: right-align all child Grid-cell

`Grid--alignMiddle`: middle-align all child Grid-cell

`Grid--alignBottom`: bottom-align all child Grid-cell

`Grid--fit`: evenly distribute space amongst all child Grid-cell

`Grid--equalHeight`: all child Grid-cell match height of the tallest

`Grid--withGutter`: adds a gutter between cells

`Grid-cell`: a child cell of Grid that wraps grid content

`Grid-cell--center`: center an individual Grid-cell
