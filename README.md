# Angular Fundamentals @ Pluralsight

The angular app created with [this course](https://app.pluralsight.com/library/courses/fundamentals-angular/table-of-contents)

In https://github.com/jmcooper/joes-robot-shop there are resources that we used to build this. I copied it in the _course-resources folder.
Otherwise there is also course material in my [Satellit's trainings](https://github.com/Teto-at-GitHub/training_satellit) repo.

## Starting the project

Since I am using angular 18 while the course uses ng 16, when init the project I have to specify the options for creating modules and removing routes:

```
ng new --no-standalone --routing false joes-robot-shop
```

In order to have autocompletion when adding images, you need to start your path from `joes-robot-shop/public/`, but for it to work in the app, it has to start from `assets/` .

## Notes
1. What is the difference between `npm start` and `ng serve` ? The first calls the second, see the console logs
2. Where are the js files when I run npm start ? If I run tsc the dist folder is created as expected from the `tsconfig.json` file
3. When adding the cart component from the course resources, I was having this issue:

```json
[{
	"resource": "/c:/Users/stefa/source/repos/AngularFundamentalsPluralsight/joes-robot-shop/src/app/cart/cart.component.html",
	"owner": "_generated_diagnostic_collection_name_#0",
	"code": "-998002",
	"severity": 8,
	"message": "Can't bind to 'ngStyle' since it isn't a known property of 'div'.",
	"source": "ngtsc",
	"startLineNumber": 19,
	"startColumn": 16,
	"endLineNumber": 19,
	"endColumn": 67,
	"relatedInformation": [
		{
			"startLineNumber": 8,
			"startColumn": 20,
			"endLineNumber": 8,
			"endColumn": 43,
			"message": "Error occurs in the template of component CartComponent.",
			"resource": "/c:/Users/stefa/source/repos/AngularFundamentalsPluralsight/joes-robot-shop/src/app/cart/cart.component.ts"
		}
	]
}]
```

Following  [the third answer here](https://stackoverflow.com/questions/48288305/angular4-exception-cant-bind-to-ngclass-since-it-isnt-a-known-property-of), I solved by adding

```diff
@NgModule({
  declarations: [
+    CartComponent
  ],
# ...
```

into `app-routing.module.ts`, but I don't understand why.

## How to debug the app?

### Things I have tried
- ts fundamentals, both via attached debugger and via chrome tools
- [this](https://www.c-sharpcorner.com/article/how-to-debug-an-angular-application/)


