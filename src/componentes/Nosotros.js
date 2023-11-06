import imagenServicios from '../img/servicios.jpg';
import imagenObjetivos from '../img/objetivos.jpg';
import imagenBeneficios from '../img/beneficios.avif';

function Nosotros() {
    return (
        <div className="container">
            <h1 className='my-5 text-center'>Nosotros</h1>
            <div className="row mt-4">
                <div className="col">
                    <h2>Servicios</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src={imagenServicios} alt="Imagen de Servicios" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <p>
                        Aenean mollis euismod urna, id efficitur nunc. Suspendisse vulputate porta turpis, non efficitur lectus bibendum ullamcorper. Praesent blandit euismod orci, vitae tincidunt lacus. Vestibulum lobortis feugiat mi, consectetur molestie ipsum tristique vel. Aenean eget eros a lectus tincidunt aliquet eu ut tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ac consequat quam, id ornare turpis. Phasellus convallis nisi mi, eget efficitur ipsum interdum a. Pellentesque nec eleifend turpis. Nunc dignissim nibh eu mi dapibus, non faucibus elit bibendum. Curabitur eu volutpat lectus. Maecenas placerat venenatis augue, ac tristique eros tincidunt ac. Vestibulum lobortis suscipit odio.
                    </p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <h2>Nuestros Objetivos</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <p>
                        Nulla quis neque tincidunt, posuere est id, viverra urna. Aliquam viverra vitae purus non interdum. Vivamus iaculis, libero a semper eleifend, erat justo malesuada felis, sed sodales purus tortor vel metus. Maecenas libero metus, malesuada eget urna sit amet, mollis eleifend leo. Phasellus ac urna id est sagittis aliquet. Suspendisse elementum et purus nec rhoncus. Praesent ac nisi tincidunt, imperdiet massa quis, commodo orci. Phasellus a viverra tortor. Morbi purus leo, tincidunt ut quam quis, porttitor cursus felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam rhoncus vestibulum auctor. Aliquam id ipsum dapibus, dictum sem nec, vestibulum nulla. Suspendisse lacinia, erat vel fringilla faucibus, nisl urna feugiat purus, vel rutrum urna massa sit amet mauris. Nam neque diam, vulputate sed volutpat at, volutpat eu nisl. Aliquam et egestas odio.
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={imagenObjetivos} alt="Imagen de Objetivos" className="img-fluid" />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <h2>Beneficios</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src={imagenBeneficios} alt="Imagen de Beneficios" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <p>
                        Duis eget mollis eros. Nam ex erat, tincidunt vitae felis nec, rhoncus porta enim. Phasellus nunc metus, varius eget purus vitae, dictum pulvinar mauris. Pellentesque interdum porta tincidunt. Sed vitae accumsan odio, quis cursus sem. Nam vitae ipsum fermentum nibh pellentesque accumsan vel at eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis facilisis, ligula vitae rutrum tempor, erat diam hendrerit elit, vitae aliquet neque ante eu diam. Integer quis hendrerit urna. Aenean et libero nulla.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Nosotros;