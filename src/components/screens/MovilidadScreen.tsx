import React, { useState } from 'react';
import { 
  Car, 
  Search, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  ShieldCheck, 
  Navigation, 
  Train, 
  Bus, 
  MapPin, 
  DollarSign, 
  QrCode,
  UserCheck,
  ArrowLeft
} from 'lucide-react';
import { MOCK_TAXIS } from '../../data/mockData';
import { TaxiRecord } from '../../types';

interface MovilidadScreenProps {
  onBack?: () => void;
}

export const MovilidadScreen: React.FC<MovilidadScreenProps> = ({ onBack }) => {
  const [searchPlate, setSearchPlate] = useState('X2A-412');
  const [taxiResult, setTaxiResult] = useState<TaxiRecord | null>(MOCK_TAXIS['X2A-412']);
  const [hasSearched, setHasSearched] = useState(true);
  const [activeTab, setActiveTab] = useState<'taxi' | 'rutas' | 'terminales'>('taxi');

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanPlate = searchPlate.trim().toUpperCase();
    const found = MOCK_TAXIS[cleanPlate];
    if (found) {
      setTaxiResult(found);
    } else {
      setTaxiResult({
        plate: cleanPlate,
        driverName: 'No Registrado',
        driverDni: '---',
        companyName: 'Sin registro en Padrón Municipal de Taxis',
        licenseNumber: 'No verificable',
        vehicleModel: 'Vehículo Desconocido',
        color: '---',
        municipalPermit: 'SIN AUTORIZACIÓN',
        status: 'no_registrado',
        expirationDate: 'N/A',
        rating: 1.0,
        suggestedRates: []
      });
    }
    setHasSearched(true);
  };

  const setSamplePlate = (plate: string) => {
    setSearchPlate(plate);
    setTaxiResult(MOCK_TAXIS[plate] || null);
    setHasSearched(true);
  };

  return (
    <div className="pb-24 px-4 pt-3 text-slate-800">
      {onBack && (
        <button
          onClick={onBack}
          className="mb-2.5 flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-xl cursor-pointer transition-colors w-fit"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al Menú Principal</span>
        </button>
      )}

      {/* Top Banner */}
      <div className="bg-[#132238] rounded-2xl p-4 text-white shadow-md mb-4">
        <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-1">
          <Car className="w-4 h-4" />
          <span>Movilidad Segura Cusco</span>
        </div>
        <h2 className="text-lg font-extrabold tracking-tight">Verificador de Taxi y Transporte</h2>
        <p className="text-xs text-slate-300 mt-1">
          Comprueba si el taxi o unidad turística cuenta con credencial municipal SETAME y habilitación de DIRCETUR.
        </p>

        {/* Tab switch */}
        <div className="mt-4 grid grid-cols-3 gap-1 bg-white/10 p-1 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveTab('taxi')}
            className={`py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'taxi' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-300 hover:text-white'
            }`}
          >
            Taxis Seguros
          </button>
          <button
            onClick={() => setActiveTab('rutas')}
            className={`py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'rutas' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-300 hover:text-white'
            }`}
          >
            Zonas Peatonales
          </button>
          <button
            onClick={() => setActiveTab('terminales')}
            className={`py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'terminales' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-300 hover:text-white'
            }`}
          >
            Terminales
          </button>
        </div>
      </div>

      {activeTab === 'taxi' && (
        <div className="space-y-4">
          {/* Plate Search Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm">
            <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-2">
              Ingresa la placa del vehículo (Ej: X2A-412)
            </label>

            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchPlate}
                  onChange={(e) => setSearchPlate(e.target.value.toUpperCase())}
                  placeholder="X2A-412"
                  maxLength={7}
                  className="w-full uppercase font-mono font-bold text-base tracking-wider bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#1b2f4a] focus:bg-white transition-all text-slate-900"
                />
              </div>
              <button
                type="submit"
                className="bg-[#1b2f4a] hover:bg-[#13243a] text-white px-4 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-1.5 cursor-pointer shadow-sm transition-all"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Verificar</span>
              </button>
            </form>

            {/* Quick Plate Presets */}
            <div className="mt-3 flex items-center gap-1.5 text-xs">
              <span className="text-slate-400 text-[11px]">Placas de prueba:</span>
              <button
                type="button"
                onClick={() => setSamplePlate('X2A-412')}
                className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 cursor-pointer"
              >
                X2A-412 (Autorizado)
              </button>
              <button
                type="button"
                onClick={() => setSamplePlate('Z1X-900')}
                className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 cursor-pointer"
              >
                Z1X-900 (No autorizado)
              </button>
            </div>
          </div>

          {/* Validation Result Box */}
          {hasSearched && taxiResult && (
            <div
              className={`rounded-2xl border p-4 shadow-sm transition-all ${
                taxiResult.status === 'autorizado'
                  ? 'bg-emerald-50/50 border-emerald-200'
                  : 'bg-rose-50/50 border-rose-200'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                    PLACA: {taxiResult.plate}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-base mt-1">
                    {taxiResult.status === 'autorizado' ? 'UNIDAD VERIFICADA Y SEGURA' : 'VEHÍCULO NO AUTORIZADO'}
                  </h3>
                </div>

                {taxiResult.status === 'autorizado' ? (
                  <CheckCircle className="w-7 h-7 text-emerald-600 shrink-0" />
                ) : (
                  <XCircle className="w-7 h-7 text-rose-600 shrink-0" />
                )}
              </div>

              {taxiResult.status === 'autorizado' ? (
                <>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs bg-white p-3 rounded-xl border border-emerald-100">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold">CONDUCTOR</span>
                      <strong className="text-slate-800 text-[11px]">{taxiResult.driverName}</strong>
                      <span className="text-[10px] text-slate-500 block">DNI: {taxiResult.driverDni}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold">EMPRESA / ASOCIACIÓN</span>
                      <strong className="text-slate-800 text-[11px]">{taxiResult.companyName}</strong>
                      <span className="text-[10px] text-emerald-600 font-bold block">★ {taxiResult.rating} / 5.0</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold">VEHÍCULO</span>
                      <span className="text-slate-700 text-[11px] font-medium">{taxiResult.vehicleModel}</span>
                      <span className="text-[10px] text-slate-500 block">{taxiResult.color}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold">REGISTRO MUNICIPAL</span>
                      <span className="text-slate-700 text-[10px] font-mono">{taxiResult.municipalPermit}</span>
                      <span className="text-[10px] text-slate-500 block">Vence: {taxiResult.expirationDate}</span>
                    </div>
                  </div>

                  {/* Official Suggested Rates */}
                  <div className="mt-3">
                    <span className="text-[11px] font-bold text-slate-700 block mb-1.5">
                      Tarifario Municipal de Referencia:
                    </span>
                    <div className="space-y-1">
                      {taxiResult.suggestedRates.map((rate, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-xs py-1 px-2.5 bg-white/80 rounded-lg border border-slate-100"
                        >
                          <span className="text-slate-600 text-[11px]">{rate.origin} → {rate.destination}</span>
                          <span className="font-bold text-slate-900 text-xs">S/. {rate.rateSol}.00</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="mt-3 bg-white p-3 rounded-xl border border-rose-200 text-xs">
                  <p className="text-rose-800 font-semibold mb-2">
                    Advertencia de Seguridad:
                  </p>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Esta unidad no figura en el padrón de taxis turísticos autorizados por la Municipalidad Provincial del Cusco ni cuenta con SOAT turístico registrado. Por su seguridad, se recomienda no abordar vehículos informales.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-rose-700 text-xs font-bold">
                    <AlertCircle className="w-4 h-4" />
                    <span>Llama a POLTUR si sientes riesgo: (084) 581560</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tips for Tourists */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-4">
            <h4 className="font-bold text-xs text-slate-800 mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0070ba]" />
              <span>Recomendaciones Oficiales de Movilidad</span>
            </h4>
            <ul className="text-xs text-slate-600 space-y-1.5 leading-normal">
              <li>• Los taxis autorizados en Cusco tienen franja a cuadros blanco y negro o logo de empresa en las puertas laterales.</li>
              <li>• En Cusco los taxis no usan taxímetro; pacte siempre la tarifa antes de subir.</li>
              <li>• Para viajes a Ollantaytambo o Urubamba, use únicamente los paraderos autorizados en Calle Pavitos.</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'rutas' && (
        <div className="space-y-3">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm">
            <h3 className="font-bold text-sm text-slate-900 mb-1">Zona Peatonal del Centro Histórico</h3>
            <p className="text-xs text-slate-500 mb-3">
              Áreas con restricción total o parcial de vehículos motorizados para preservación de calzadas incas y coloniales.
            </p>

            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>Calle Hatun Rumiyoc</span>
                  <span className="text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full">100% Peatonal</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Acceso exclusivo a pie. Prohibido bicicletas, motos o carretas pesadas para cuidar los muros incas.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>Plaza de Armas y Portales</span>
                  <span className="text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full">Peatonal Permanente</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Solo vehículos de emergencia o abastecimiento de 05:00 a 07:00 AM con permiso municipal especial.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>Cuesta y Plazoleta San Blas</span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Tránsito Restringido</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Paso únicamente permitido a residentes debidamente acreditados a velocidad máxima de 10 km/h.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'terminales' && (
        <div className="space-y-3">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm">
            <h3 className="font-bold text-sm text-slate-900 mb-1">Terminales y Estaciones Autorizadas</h3>
            <p className="text-xs text-slate-500 mb-3">
              Puntos oficiales de salida para Valle Sagrado, Machu Picchu y viajes interregionales.
            </p>

            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-200">
                <div className="flex items-center gap-2 text-sky-900 font-bold text-xs mb-1">
                  <Train className="w-4 h-4 text-sky-600" />
                  <span>Estación de Tren San Pedro / Wanchaq</span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Puntos de embarque ferroviario hacia Ollantaytambo y Machu Picchu Pueblo (Aguas Calientes).
                </p>
                <span className="text-[10px] text-sky-700 font-semibold block mt-1">
                  Operadores: PeruRail & Inca Rail
                </span>
              </div>

              <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs mb-1">
                  <Bus className="w-4 h-4 text-amber-600" />
                  <span>Terminal Pavitos (Calle Pavitos s/n)</span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Minivans oficiales y autorizadas hacia Ollantaytambo. Salidas cada 15 minutos (Pasaje: S/. 12 - 15).
                </p>
                <span className="text-[10px] text-amber-800 font-semibold block mt-1">
                  Fiscalizado por DIRCETUR y Policía de Tránsito
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-800 font-bold text-xs mb-1">
                  <Navigation className="w-4 h-4 text-slate-600" />
                  <span>Terminal Terrestre de Cusco</span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Av. Vallejo Santoni s/n. Conexiones a Puno (Lago Titicaca), Arequipa y Lima.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
