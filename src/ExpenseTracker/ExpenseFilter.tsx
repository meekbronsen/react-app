import categories  from "./categoryList"

interface Props{
    onSelectCategory: (category: string) => void
}

function ExpenseFilter({onSelectCategory}: Props) {

  return (
    <select className="form-select" onChange={(event => onSelectCategory(event.target.value))}>
        <option value="">All Categories</option>
        {categories.map((i) => <option key={i} value={i}>{i}</option> )}
    </select>
  )
}

export default ExpenseFilter