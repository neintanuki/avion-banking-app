import TransactComponent from '../components/Transact';

// TRANSACT
export default function Transact({ users, onUsers, account, isAdmin }) {

  return <TransactComponent users={users} onUsers={onUsers} account={account} isAdmin={isAdmin} />

}
