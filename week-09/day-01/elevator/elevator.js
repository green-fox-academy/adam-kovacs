'use strict';

class ElevatorModel {
  constructor(maxFloor, maxPeople) {
    this.maxFloor = maxFloor;
    this.maxPeople = maxPeople;
    this.currentFloor = 0;
    this.currentPeople = 0;
  }

  changePeople(amount) {
    if (this.checkBoundaries(this.currentPeople, this.maxPeople, amount)) {
      this.currentPeople += amount;
    }
  }

  changeFloor(amount) {
    if (this.checkBoundaries(this.currentFloor, this.maxFloor, amount)) {
      this.currentFloor += amount;
    }
  }

  checkBoundaries(currentValue, maxValue, plannedChange) {
    return (currentValue + plannedChange >= 0 && currentValue + plannedChange <= maxValue)
  }
}


class ElevatorController {
  constructor(maxFloor, maxPeople) {
    this.elevatorModel = new ElevatorModel(maxFloor, maxPeople);
    this.elevatorView = new ElevatorView(maxFloor);
    this.buttons = Array.from(document.querySelectorAll('button'));

    this.buttons.forEach(button => {
      button.addEventListener('click', () => this.buttonHandler(button.id));
      console.log(`DOM button created: ${button.id}`);
    });

    this.elevatorView.updateView(this.elevatorModel.currentFloor, this.elevatorModel.currentPeople);
  }

  buttonHandler(buttonID) {
    console.log(`button pressed: ${buttonID}`);
    switch (buttonID) {
      case 'elevatorUp':
        this.elevatorModel.changeFloor(1);
        break;
      case 'elevatorDown':
        this.elevatorModel.changeFloor(-1);
        break;
      case 'addPeople':
        this.elevatorModel.changePeople(1);
        break;
      case 'removePeople':
        this.elevatorModel.changePeople(-1);
        break;
    }
    this.elevatorView.updateView(this.elevatorModel.currentFloor, this.elevatorModel.currentPeople);
  }
}


class ElevatorView {
  constructor(maxFloor) {
    for (let i = 0; i <= maxFloor; i++) {
      let newChild = document.createElement('div');
      newChild.id = maxFloor - i;
      document.querySelector('#floorContainer').appendChild(newChild);
    }

    this.floorArray = document.querySelectorAll('#floorContainer>*');
  }

  updateView(currentFloor, currentPeople) {
    console.log(`updating view: F=${currentFloor}, P=${currentPeople}`);
    this.floorArray.forEach(element => {
      element.removeAttribute('class');
      element.textContent = '';
      if (parseInt(element.id) === currentFloor) {
        element.className = 'selected';
        element.textContent = currentPeople;
      }
    });
  }
}

let elevator = new ElevatorController(10, 10);