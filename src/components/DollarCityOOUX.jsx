import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Mobile OOUX table image
const oouxTableImage = '/assets/images/dollarcity/ooux-table.png'

const DollarCityOOUX = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '48px' : '48px',
    display: 'flex',
    alignItems: 'center',
  }

  const contentStyles = {
    display: 'flex',
    flex: '1 0 0',
    flexDirection: 'column',
    gap: isMobile ? '44px' : '0px',
    alignItems: isMobile ? 'center' : 'flex-start',
    width: isMobile ? '100%' : '1033px',
  }

  const textContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : '24px',
    alignItems: 'flex-start',
    width: '100%',
  }

  const titleStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '20px' : '24px',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: isMobile ? '1px' : '0',
    color: '#370161',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
    margin: 0,
    width: '100%',
  }

  const descriptionStyles = {
    fontFamily: `'Inter', sans-serif`,
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '-0.176px',
    color: isMobile ? '#000000' : colors.neutral['700'],
    margin: 0,
    width: '100%',
    fontStyle: 'normal',
  }

  // Mobile image container styles
  const mobileImageContainerStyles = {
    width: '100%',
    aspectRatio: '1202 / 1006',
    position: 'relative',
  }

  const mobileImageStyles = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    pointerEvents: 'none',
  }

  const tableContainerStyles = {
    width: '100%',
    overflowX: 'visible',
    marginTop: '48px',
  }

  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #E0E0E0',
  }

  const thStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: 1.5,
    color: colors.neutral['700'],
    padding: '16px',
    textAlign: 'left',
    borderBottom: '1px solid #E0E0E0',
    borderRight: '1px solid #E0E0E0',
    backgroundColor: '#F9F9F9',
  }

  const tdStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.5,
    color: colors.neutral['700'],
    padding: '12px 16px',
    borderBottom: '1px solid #E0E0E0',
    borderRight: '1px solid #E0E0E0',
    verticalAlign: 'top',
  }

  return (
    <section style={sectionStyles}>
      <div style={contentStyles}>
        {/* Text Content */}
        <div style={textContentStyles}>
          <p style={titleStyles}>OOUX</p>
          <p style={descriptionStyles}>
            To structure the ideas and reduce complexity, I defined the information architecture using an Object-Oriented UX (OOUX) approach. By identifying core objects such as products, categories, cart, and payment methods, I organized the experience around elements users already understand. This method helped create a clear hierarchy, consistent navigation, and predictable interactions, ensuring users could move through the app quickly and with confidence.
          </p>
        </div>

        {/* Mobile: Image of OOUX table */}
        {isMobile ? (
          <div style={mobileImageContainerStyles}>
            <img
              src={oouxTableImage}
              alt="OOUX Table - Object-Oriented UX analysis"
              style={mobileImageStyles}
            />
          </div>
        ) : (
          /* Desktop: OOUX Table */
          <div style={tableContainerStyles}>
            <table style={tableStyles}>
              <thead>
                <tr>
                  <th style={thStyles}>Acciones</th>
                  <th style={thStyles}>Objetos</th>
                  <th style={thStyles}>Contenido</th>
                  <th style={thStyles}>Metadatos</th>
                  <th style={{ ...thStyles, borderRight: 'none' }}>Objetos relacionados</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyles}>Explorar<br />Buscar</td>
                  <td style={tdStyles}>Productos del Dollarcity</td>
                  <td style={tdStyles}>Nombre del producto<br />Puntuacion</td>
                  <td style={tdStyles}>Descripcion</td>
                  <td style={{ ...tdStyles, borderRight: 'none' }}>Fotos, videos</td>
                </tr>
                <tr>
                  <td style={tdStyles}>Ver detalles<br />Añadir al carrito<br />Quitar del carrito<br />Numero de productos</td>
                  <td style={tdStyles}>Carrito</td>
                  <td style={tdStyles}>Precio</td>
                  <td style={tdStyles}>detalles<br />opiniones</td>
                  <td style={{ ...tdStyles, borderRight: 'none' }}>Producto</td>
                </tr>
                <tr>
                  <td style={tdStyles}>Click en sign in<br />Click en Log in</td>
                  <td style={tdStyles}>Home</td>
                  <td style={tdStyles}>Perfil</td>
                  <td style={tdStyles}>Informacion del usuario<br />email address<br />password</td>
                  <td style={{ ...tdStyles, borderRight: 'none' }}>Landing page</td>
                </tr>
                <tr>
                  <td style={tdStyles}>Poner datos del metodo de pago<br /><br />Llenar datos del domicilo</td>
                  <td style={tdStyles}>La compra</td>
                  <td style={tdStyles}>opciones de pago</td>
                  <td style={tdStyles}>infromacion personal y segura</td>
                  <td style={{ ...tdStyles, borderRight: 'none' }}>Conetar con el banco</td>
                </tr>
                <tr>
                  <td style={tdStyles}>Finalizar la compra.<br />Metodo de pago seleccionado</td>
                  <td style={tdStyles}>Confirmacion</td>
                  <td style={tdStyles}>Popup de confirmacion</td>
                  <td style={tdStyles}>Mensaje de confirmcions</td>
                  <td style={{ ...tdStyles, borderRight: 'none' }}>Popup de confirmacion</td>
                </tr>
                <tr>
                  <td style={{ ...tdStyles, borderBottom: 'none' }}>Seleccionar domicilio<br />Recoger en tienda</td>
                  <td style={{ ...tdStyles, borderBottom: 'none' }}>Pedido</td>
                  <td style={{ ...tdStyles, borderBottom: 'none' }}>Detalles del domicilio</td>
                  <td style={{ ...tdStyles, borderBottom: 'none' }}>infromacion de donde se recibe el domicilio<br />dejar dirreccion y datos personales</td>
                  <td style={{ ...tdStyles, borderRight: 'none', borderBottom: 'none' }}>Seguridad</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}

export default DollarCityOOUX
