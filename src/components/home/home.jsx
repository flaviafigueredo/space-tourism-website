import { Link } from 'react-router-dom';
import { HomeSection, HomeContainer, Content, H5, H1, P, Button } from './styles';

export const Home = () => {
    return (
        <HomeSection>
            <HomeContainer className="container">
                <Content>
                    <H5 className="sub-heading">So, you want to travel to</H5>
                    <H1>Space</H1>
                    <P>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</P>
                </Content>

                <Link to="/destination">
                    <Button>Explore</Button>
                </Link>
            </HomeContainer>
        </HomeSection>
    );
};