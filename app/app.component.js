function Hero (id,name) {
    this.id = id;
    this.name = name;
}

(function(app) {

  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: `
		  <h1>{{title}}</h1>
		  <h2>{{hero.name}} details!</h2>
		  <div><label>id: </label>{{hero.id}}</div>
		  <div>
		    <label>name: </label>
		    <input [(ngModel)]="hero.name" placeholder="name">
		  </div>
  		`
    })
    .Class({
      constructor: function() {
      	this.title = 'Tour of Heroes';
  		this.hero = new Hero(1,"Windstorm");
      }
    });
})(window.app || (window.app = {}));




