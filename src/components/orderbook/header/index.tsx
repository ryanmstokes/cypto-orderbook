import { StyledOrderbookHeader, StyledGrouping, StyledTitle, StyledLeft, StyledSymbolPair } from 'components/orderbook/header/styled'
import GroupingSelect from 'components/inputs/grouping-select'

const OrderbookHeader = ({ id, title, symbol }: any) => {
  const symbolPairTitle = symbol.slice(3).slice(0, 3) + '/' + symbol.slice(3).slice(3)
  return (
    <StyledOrderbookHeader>
      <StyledLeft>
        <StyledTitle>{title}</StyledTitle>
        <StyledSymbolPair>- {symbolPairTitle}</StyledSymbolPair>
      </StyledLeft>
      <StyledGrouping>
        <GroupingSelect id={id} />
      </StyledGrouping>
    </StyledOrderbookHeader>
  )
}

export default OrderbookHeader