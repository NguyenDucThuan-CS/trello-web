import './App.css'
import Button from '@mui/material/Button'
import { useColorScheme } from '@mui/material'

function App() {
  // const [count, setCount] = useState(0)
  const { mode, setMode } = useColorScheme()
  console.log('modezzzz', mode);

  return (
    <>
      <Button
        onClick={() => {
          setMode(mode === 'light' ? 'dark' : 'light')
        }}
      >
        {mode === 'light' ? 'Turn dark' : 'Turn light'}
      </Button>
    </>
  )
}

export default App
