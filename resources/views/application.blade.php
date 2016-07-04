<html ng-app="voidApp">
  <head>
    <title>Hi</title>
    <base href="/">
    <link rel="stylesheet" type="text/css" href="/css/void.css">
  </head>
  <body>
    <div>
      <md-toolbar id="topnav" class="menu">
        <nav class="md-toolbar-tools">
          <h1>
            <a href="/" md-button md-no-ink>Entervoid</a>
          </h1>
          <span flex></span>
          <a href="#" md-button>Comics</a>
          <a href="#" md-button>Characters</a>
          <a href="#" md-button>News</a>
          <a href="#" md-button>Forum</a>
        </nav>
      </md-toolbar>
    </div>
    <div class="container" ui-view=""></div>
    <script src="/js/vendor.js"></script>
    <script src="/js/void.js"></script>
  </body>
</html>
