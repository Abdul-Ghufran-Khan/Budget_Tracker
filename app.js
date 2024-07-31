let budget = 0;
let expenses = 0;

function setBudget() {
  budget = parseFloat(document.getElementById('budgetInput').value);
  document.getElementById('totalBudget').textContent = budget;
  updateBalance();
}

function addExpense() {
  const product = document.getElementById('productInput').value;
  const cost = parseFloat(document.getElementById('costInput').value);

  if (!isNaN(cost)) {
    expenses += cost;
    document.getElementById('totalExpenses').textContent = expenses;
    updateBalance();

    const listItem = document.createElement('li');
    listItem.setAttribute('id',"list")
    listItem.textContent = `${product}: $${cost}`;
    listItem.innerHTML += ` <button onclick="delitem()">Delete</button>`
    document.getElementById('expenseList').appendChild(listItem);

    document.getElementById('productInput').value = '';
    document.getElementById('costInput').value = '';
  } else {
    alert('Please enter a valid cost.');
  }
}

function updateBalance() {
  const balance = budget - expenses;
  document.getElementById('balance').textContent = balance;
}

function delitem(){
  let remove = document.getElementById('list')
  remove.remove()
}