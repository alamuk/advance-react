import './theme.css';
import { ThemeProvider, useTheme } from './UseThemeHook-Provider.jsx';
import Switch from './switch/Switch.jsx';
// -------------------------------
// eslint-disable-next-line react/prop-types
const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === 'light' ? 'black' : 'white',
      }}
    >
      {children}
    </h2>
  );
};

// -------------------------------
// eslint-disable-next-line react/prop-types
const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === 'light' ? 'black' : 'white',
      }}
    >
      {children}
    </p>
  );
};
// -------------------------------
const Content = () => {
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would make
        me stop trying all of the others.
      </Paragraph>
    </div>
  );
};
// -------------------------------
const Header = () => {
  return (
    <header>
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};
// -------------------------------

const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};

// -------------------------------
function LightDarkTheme() {
  const { theme } = useTheme();
  return (
    <div
      className="theme"
      style={{
        backgroundColor: theme === 'light' ? 'white' : 'black',
      }}
    >
      <Header />
      <Page />
    </div>
  );
}
// -------------------------------
function ProviderComponent() {
  return (
    <ThemeProvider>
      <LightDarkTheme />
    </ThemeProvider>
  );
}

export default ProviderComponent;
