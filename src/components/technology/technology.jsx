import { useState } from 'react';
import data from '../../data/data.json';
import { TechnologySection, TechnologyContainer, Content, TechnologyNavigation, TechnologySelector, TechnologyInfos, P, H3, IMG } from './styles';

export const Technology = () => {
    const technology = data.technology;
    const [activeTechnology, setActiveTechnology] = useState(technology[0]);

    const handleTechnologyClick = (technology) => {
        setActiveTechnology(technology);
    };

    return (
        <TechnologySection>
            <TechnologyContainer className="container">
                <h5 className="sub-heading">
                    <span>03</span> Space launch 101
                </h5>

                <Content>
                    <nav>
                        <TechnologyNavigation>
                            {technology.map((item, index) => (
                                <li key={item.name}>
                                    <TechnologySelector 
                                        onClick={() => handleTechnologyClick(item)}
                                        className={activeTechnology === item ? 'active' : ''}
                                    >
                                        {index + 1}
                                    </TechnologySelector>
                                </li>
                            ))}
                        </TechnologyNavigation>
                    </nav>

                    <TechnologyInfos>
                        <P>The terminology...</P>
                        <H3>{activeTechnology.name}</H3>
                        <p>{activeTechnology.description}</p>
                    </TechnologyInfos>
                </Content>
            </TechnologyContainer>

            <IMG src={window.innerWidth <= 1024 ? activeTechnology.images.landscape : activeTechnology.images.portrait} alt={`Image of ${activeTechnology.name}`} />
        </TechnologySection>
    );
};