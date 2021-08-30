# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me Zaytoun as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @AbdelrahmanZaytoun/lotide`

**Require it:**

`const _ = require('@AbdelrahmanZaytoun/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* tail function : return tail of passed array
* assertArrayEqual function : return passed if equal, failed if NOT equal 
* assertEqual Function : comparison => return assertion passed OR failed 
* assertObjectsEqual Function :  comparison => return assertion passed OR failed 
* countLetters Function : counts letters
* countOnly Function : counts matching items in the array
* eqArrays Function : return true/false if  equal /NOT equal 
* eqObjects Function : return true/false if  equal /NOT equal 
* findKeyByValue Function : return an elements of array if they are matched with the value 
* findKeys
* flatten Function : nested array
* head Function : first element of array 
* letterPositions Function : return all letter indexes
* map Function : returns a newarray with elements of the original array which pass the callback function
* middle Function: return one middle if the array is odd number OR 2 middle if it is even number
* takeUntil Function
* without Function 