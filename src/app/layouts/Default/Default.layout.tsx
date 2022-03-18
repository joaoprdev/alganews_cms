import Logo from '../../components/Logo'
import NavBarLink from '../../components/NavBarLink'
import SessionController from '../../components/SessionController'
import * as DL from './Default.layout.styles'

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout ( props: DefaultLayoutProps) {

  return <DL.Wrapper>
    <DL.Header>
      <Logo />
    </DL.Header>

    <DL.Main>
      <DL.Navigation>
        <NavBarLink  />
      </DL.Navigation>

      <DL.FeaturedContent>
        { props.children }
      </DL.FeaturedContent>
      
      <DL.Aside>
        <SessionController
          name="João Paulo Rodrigues"
          description="editor há 2 anos"
        />
      </DL.Aside>
    </DL.Main>

  </DL.Wrapper>
}

export default DefaultLayout