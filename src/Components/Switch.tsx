import Switch from '@mui/material/Switch';


const label = { inputProps: { 'aria-label': 'Switch demo' } };


const ABSwitch = (props: any) => {
  const { changeSwitch } = props
  return (
    <div><Switch {...label} defaultChecked /></div>
  )
}

export default ABSwitch