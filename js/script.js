// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1

function checkNumber () {

  const userNumber = parseInt(document.getElementById('user-number').value)

  if (userNumber === randomNumber)  {
    document.getElementById('result').innerHTML =
      '<p>You have got it correct with your guess!</p>'
  }

  if (userNumber !== randomNumber)  {
    document.getElementById('result').innerHTML =
      '<p>You have done wrong with your guess!</p>'
      '<br/> The correct number was: ' + randomNumber + '</p>'
  }
}