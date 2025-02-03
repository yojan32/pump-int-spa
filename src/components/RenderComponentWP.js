import React from 'react'
import parse, { domToReact } from 'html-react-parser';

// Mapeo de componentes disponibles
const componentsMap = {
};

const RenderComponentWP = ({ content }) => {
	// Opciones para procesar nodos específicos
	const options = {
		replace: (domNode) => {
			// Verifica si es un elemento y si está en el mapa de componentes
			if (domNode.type === 'tag') {
				const Component = componentsMap[domNode.name];
				if (Component) {
					const props = domNode.attribs || {}; // Obtener los atributos como props
					return (
						<Component {...props}>
							{domToReact(domNode.children, options)} {/* Procesar hijos */}
						</Component>
					);
				}
			}
			return undefined; // Deja el nodo como está si no es un componente registrado
		},
	};

	return <div>{parse(content, options)}</div>;
};

export default RenderComponentWP;