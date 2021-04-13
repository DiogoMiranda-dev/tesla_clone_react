import React from 'react'

import { ModelsWrapper, ModelSection } from '../Model'
import DefaultOverlayContent from '../DefaultOverlayContent'
import UniqueOverlay from '../UniqueOverlay'

import { Container, Spacer } from './styles'

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            {
              label: 'Modelo S',
              description:'Agendar um test drive sem contato'
            },
            {
              label: 'Modelo 3',
              description:'Agende uma consulta virtual'
            },
            {
              label: 'Modelo X',
              description:'Agende uma consulta virtual'
            },
            {
              label: 'Modelo Y',
              description:'Agende uma consulta virtual'
            }
            ,
            {
              label: 'Powerwall',
              description:'Energia para tudo'
            }
            ,
            {
              label: 'Painéis solares',
              description:'Energia para tudo'
            }
            ,
            {
              label: 'Acessórios',
              description:'Pedido online para entrega'
            }
          ].map((item, key) => (
            <ModelSection
              key={key}
              className="colored"
              modelName={item.label}
              overlayNode={
                <DefaultOverlayContent
                  label={item.label}
                  description={item.description}
                />
              }
            />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  )
}

export default Page
