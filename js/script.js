// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Sasha Vorontsov
// Created on: April 2025
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1

function calculaterandomnumber () {

  const userNumber = parseInt(document.getElementById('usernumber').value)

  if (userNumber === randomNumber)  {
    document.getElementById('answer1').innerHTML =
      '<p>You have got it correct with your guess!</p>'
  }

  if (userNumber !== randomNumber)  {
    document.getElementById('answer1').innerHTML =
      '<p>You have done wrong with your guess!</p>'
      '<br/> The correct number was: ' + randomNumber + '</p>'
  }
}