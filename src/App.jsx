/* App.jsx */

import { Authenticator, Image, Text, useTheme, View } from '@aws-amplify/ui-react'

import { Header } from './layout/Header'
import { Main } from './layout/Main'
import { Footer } from './layout/Footer'
import { AppRoutes } from './routes'

import theNewsLogo from './assets/the-news.png'

function App() {
  const components = {
    // Log in screen custom components (from AWS Amplify docs)

    Header() {
      const { tokens } = useTheme()
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image alt="the News. logo" src={theNewsLogo} />
        </View>
      )
    },
    Footer() {
      const { tokens } = useTheme()
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text>
            &copy; 2024 <span className="display-font">the News.</span> All Rights
            Reserved.
          </Text>
        </View>
      )
    },
  }

  return (
    <Authenticator components={components}>
      {({ signOut }) => (
        <>
          <Header signOut={signOut} />
          <Main>
            <AppRoutes />
          </Main>
          <Footer />
        </>
      )}
    </Authenticator>
  )
}

export default App
