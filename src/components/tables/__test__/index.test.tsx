import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Tables from 'components/tables'
import configureStore from 'redux-mock-store'
import config from 'store/features/config/initial-state'
import tables from 'store/features/tables/initial-state'
import { Provider } from 'react-redux'

// jest.mock("store/features/tables", () => ({
//   useTables: () => (
//     {
//       title: "Order Book",
//       current: "XBTC",
//       tables: tables
//     })
// }));

const tablesProps = {
  title: "Order Book",
  current: "XBTC",
  tables: [{ title: "Bids", sort: "ASC", values: [{ amount: 100, price: 100, total: 1000 }, { amount: 100, price: 100, total: 1000 }] }, { title: "Bids", sort: "ASC", values: [{ amount: 100, price: 100, total: 1000 }, { amount: 100, price: 100, total: 1000 }] }]
} as any

describe("Tables component", () => {

  const mockStore = configureStore()
  const store = mockStore({ config: config, lists: tables })

  render(<Provider store={store}><Tables {...tablesProps} /></Provider>)

  it('renders the table component', () => {

    screen.getByText(tables.title)
  })
})

