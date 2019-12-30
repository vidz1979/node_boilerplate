const users = ['Junior', 'Alexandra', 'Carol', 'Sophia']

const getUsers = () => {
  return users
}

const addUser = name => {
  const duplicate = users.find(user => user == name)
  if (!duplicate) {
    users.push(name)
  }
  return !duplicate
}

export default { getUsers, addUser }
