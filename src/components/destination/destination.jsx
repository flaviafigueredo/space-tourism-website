import { useState } from 'react';
import data from '../../data/data.json';
import { DestinationSection, DestinationContainer, Content, IMG, DestinationInfos, MenuDestinations, DestinationOption, H1, P, TravelDetails, H6, H5 } from './styles';

export const Destination = () => {
  const destinations = data.destinations;
  
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <DestinationSection>
      <DestinationContainer className="container">        
          <h5 className="sub-heading">
            <span>01</span> Pick your destination
          </h5>        

        <Content>
          <IMG src={selectedDestination.images.png} alt={`Image of ${selectedDestination.name}`} />

          <DestinationInfos>            
            <nav>
              <MenuDestinations>
                {destinations.map((destination) => (
                  <li key={destination.name}>
                    <DestinationOption onClick={() => handleDestinationClick(destination)} className={destination === selectedDestination ? 'active' : ''}>
                      {destination.name}
                    </DestinationOption>
                  </li>
                ))}
              </MenuDestinations>
            </nav>

            <H1>{selectedDestination.name}</H1>
            <P>{selectedDestination.description}</P>

            <TravelDetails>
              <div>
                <H6>Avg. distance</H6>
                <H5>{selectedDestination.distance}</H5>
              </div>

              <div>
                <H6>Est. travel time</H6>
                <H5>{selectedDestination.travel}</H5>
              </div>
            </TravelDetails>
          </DestinationInfos>
        </Content>
      </DestinationContainer>
    </DestinationSection>
  );
};