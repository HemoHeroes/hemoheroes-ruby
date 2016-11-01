# Getting Started

Use NPM to install: `npm install jons-modular-ui`.

In Rails you can add to `vendor` path directly and request the `index.css` in `application.css`. If you not use Rails or other automatic preprocessor, you need compile with Sass.

## Name convention of selectors for componentes
```
.MyComponent {}
.MyComponent.is-animating {}
.MyComponent--modifier {}

.MyComponent-part {}
.MyComponent-anotherPart {}
```

## Structure of components with Sass
```
@import '../variables';

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

## Using modular media-queries in components
```
.Section{
  padding: 0 0 35px 0;

  &-header{
    padding: 15px 0 10px;
  }

  &-title{
    text-align: left;
    float: left;
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

### Available ../variables to media-queries
`desktop`: min-width: 1200px

`tablet`: min-width: 900px and max-width: 1199

`mobile`: min-width: 1px and max-width: 899px

`lg-mobile`: min-width: 425px and max-width: 899px

`sm-mobile`: min-width: 1px and max-width: 424px

## Using Grids
```
<div class="Grid">
  <div class="Grid-cell u-size6of12">
    Meu conteudo ou divs
  </div>
  <div class="Grid-cell u-size6of12">
    Meu conteudo ou divs
  </div>  
</div>
```

### Available classes for Grid

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

## Require dependencies or other components
```
/* npm-installed dependency */
@import "suitcss-utils-text";
/* local dependency */
@import "./Button";

.MyComponent {}
```

Fork from https://suitcss.github.io/
