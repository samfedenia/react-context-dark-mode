import { useTheme, useThemeUpdate } from './ThemeContext';
import { Sun, Moon, IconAttribution } from './Icons';
function App() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#EEE',
    color: darkTheme ? '#999' : '#111',
    padding: '3rem',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContext: 'center',
  };

  const linkStyles = {
    color: darkTheme ? 'pink' : 'darkgray',
    textDecoration: 'none',
    paddingTop: '2rem',
  };
  return (
    <div style={themeStyles}>
      <div
        style={{
          display: 'flex',
          width: '80vw',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        {darkTheme ? <Sun onClick={toggleTheme} /> : <Moon onClick={toggleTheme} />}
      </div>
      <h2>Dark mode toggle using React Context</h2>
      <IconAttribution style={linkStyles} />
    </div>
  );
}

export default App;
