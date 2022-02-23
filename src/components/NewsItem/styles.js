import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: '10px',
        margin: '5px',
      },
      detail: {
        display: 'flex',
        flexDirection: 'row',
        padding: '5px 20px',
        alignItems: 'center',
        '& > p': {
          color: 'white',
          paddingRight: '20px',
        },
      },
      linker: {
        display: 'flex',
        flexDirection: 'column',
        '& > a': {
          color: 'white',
          padding: '5px 0 5px 0',
          fontSize: '23px',
        },
        '&:hover': {
          '& > a': {
            color: 'blue',
          },
        },
      },
      info: {
        display: 'flex',
        flexDirection: 'row',
        '& > p': {
          color: 'white',
          paddingTop: '5px',
          paddingRight: '20px',
        },
      },
  }))

  export default useStyles
