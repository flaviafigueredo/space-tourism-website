import { useState } from 'react';
import data from '../../data/data.json';
import { CrewSection, CrewContainer, Content, H4, H3, P, CrewNavigation, CrewMemberSelector, IMG } from './styles';

export const Crew = () => {
    const crew = data.crew;
    const [activeCrew, setActiveCrew] = useState(crew[0]);

    const handleCrewClick = (crewMember) => {
        setActiveCrew(crewMember);
    };

    return (
        <CrewSection>
            <CrewContainer className="container">
                <h5 className="sub-heading">
                    <span>02</span> Meet your crew
                </h5>

                <Content>
                    {activeCrew && (
                        <>
                            <H4>{activeCrew.role}</H4>
                            <H3>{activeCrew.name}</H3>
                            <P>{activeCrew.bio}</P>
                        </>
                    )}

                    <nav>
                        <CrewNavigation>
                            {crew.map((crewMember) => (
                                <li key={crewMember.name}>
                                    <CrewMemberSelector  onClick={() => handleCrewClick(crewMember)} className={crewMember === activeCrew ? 'active' : ''}></CrewMemberSelector>
                                </li>
                            ))}
                        </CrewNavigation>
                    </nav>
                </Content>
            </CrewContainer>

            {activeCrew && (
                <IMG src={activeCrew.images.png} alt={`Image of ${activeCrew.name}`} />
            )}
        </CrewSection>
    );
};