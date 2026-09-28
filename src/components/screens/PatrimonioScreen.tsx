import React, { useState } from 'react';
import { 
  ShieldAlert, 
  PhoneCall, 
  AlertTriangle, 
  FileText, 
  Send, 
  CheckCircle, 
  HeartHandshake, 
  ShieldCheck, 
  Landmark, 
  Activity,
  ArrowLeft,
  X
} from 'lucide-react';
import { EMERGENCY_CONTACTS, INITIAL_INCIDENTS } from '../../data/mockData';
import { IncidentReport } from '../../types';

interface PatrimonioScreenProps {
  onBack?: () => void;
  openSosDirectly?: boolean;
}

export const PatrimonioScreen: React.FC<PatrimonioScreenProps> = ({ onBack, openSosDirectly }) => {
  const [incidents, setIncidents] = useState<IncidentReport[]>(INITIAL_INCIDENTS);
  const [isReporting, setIsReporting] = useState(false);
  const [category, setCategory] = useState<IncidentReport['category']>('sobreprecio');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [ticketCreated, setTicketCreated] = useState<string | null>(null);
  const [callingEntity, setCallingEntity] = useState<string | null>(openSosDirectly ? 'POLTUR Cusco ((084) 581560)' : null);

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    const newTicketId = `INC-2026-${Math.floor(100 + Math.random() * 900)}`;
    const newIncident: IncidentReport = {
      id: newTicketId,
      timestamp: 'Hace un momento',
      category,
      location: location || 'Centro Histórico de Cusco',
      description,
      status: 'recibido',
      assignedEntity: category === 'dano_patrimonio' ? 'POLTUR' : 'DIRCETUR'
    };

    setIncidents([newIncident, ...incidents]);
    setTicketCreated(newTicketId);
    setDescription('');
    setLocation('');
  };

  const handleSimulateCall = (name: string, phone: string) => {
    setCallingEntity(`${name} (${phone})`);
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

      {/* Top Banner SOS */}
      <div className="bg-gradient-to-r from-rose-900 via-[#1b2f4a] to-[#132238] rounded-2xl p-4 text-white shadow-lg mb-4 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold uppercase tracking-wider border border-rose-500/30">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
            <span>Central de Emergencia 24h</span>
          </div>
          <span className="text-[10px] text-slate-300">POLTUR & Serenazgo</span>
        </div>

        <h2 className="text-lg font-black tracking-tight mt-2">Protección Patrimonial y Turística</h2>
        <p className="text-xs text-slate-200 mt-1 leading-relaxed">
          Asistencia directa al viajero ante contingencias, orientación legal y salvaguarda de monumentos arqueológicos.
        </p>

        {/* SOS Emergency Call Button */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            onClick={() => handleSimulateCall('POLTUR Cusco', '(084) 581560')}
            className="bg-rose-600 hover:bg-rose-700 active:scale-[0.98] text-white py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>SOS POLTUR</span>
          </button>

          <button
            onClick={() => handleSimulateCall('SAMU Emergencias Médicas', '106')}
            className="bg-sky-600 hover:bg-sky-700 active:scale-[0.98] text-white py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition-all"
          >
            <Activity className="w-3.5 h-3.5" />
            <span>SAMU Médica (106)</span>
          </button>
        </div>
      </div>

      {/* Simulated Calling Modal */}
      {callingEntity && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 text-white rounded-2xl p-6 w-full max-w-sm text-center shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-rose-600/20 text-rose-500 mx-auto flex items-center justify-center mb-3 animate-pulse">
              <PhoneCall className="w-8 h-8" />
            </div>
            <h3 className="font-extrabold text-base mb-1">Conectando con Asistencia Oficial</h3>
            <p className="text-xs text-slate-400 mb-4">{callingEntity}</p>
            <div className="p-3 bg-slate-800/80 rounded-xl text-left text-xs text-slate-300 space-y-1 mb-4 border border-slate-700/60">
              <p>• Su ubicación GPS aproximada ha sido transmitida a la patrulla de turismo más cercana.</p>
              <p>• Idiomas de atención disponibles: Español, Quechua, Inglés.</p>
            </div>
            <button
              onClick={() => setCallingEntity(null)}
              className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2.5 rounded-xl font-bold text-xs cursor-pointer"
            >
              Finalizar Conexión
            </button>
          </div>
        </div>
      )}

      {/* Action to Report an Incident */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm mb-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="font-extrabold text-sm text-slate-900">Reporte Rápido de Incidente</h3>
            <p className="text-xs text-slate-500">¿Cobro indebido, acoso o daño patrimonial?</p>
          </div>
          <button
            onClick={() => {
              setIsReporting(!isReporting);
              setTicketCreated(null);
            }}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#1b2f4a] text-white hover:bg-[#13243a] cursor-pointer transition-colors"
          >
            {isReporting ? 'Cerrar' : '+ Nueva Denuncia'}
          </button>
        </div>

        {isReporting && (
          <form onSubmit={handleSubmitReport} className="mt-3 pt-3 border-t border-slate-100">
            <div className="mb-3">
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Tipo de Afectación
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as IncidentReport['category'])}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 outline-none focus:border-[#1b2f4a]"
              >
                <option value="sobreprecio">Cobro Abusivo / Estafa en Transporte o Comercio</option>
                <option value="falso_guia">Falso Guía de Turismo / Sin Carnet DIRCETUR</option>
                <option value="acoso">Acoso de Jaladores o Vendedores No Autorizados</option>
                <option value="dano_patrimonio">Atentado o Daño a Muro Inca / Patrimonio</option>
                <option value="otro">Pérdida de Pertenencias / Asistencia General</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Lugar de los Hechos
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Ej. Calle Hatun Rumiyoc / Frontis de la Catedral"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 outline-none focus:border-[#1b2f4a]"
              />
            </div>

            <div className="mb-3">
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Detalle del Incidente
              </label>
              <textarea
                required
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describa brevemente lo ocurrido para que los inspectores de DIRCETUR o POLTUR intervengan..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:border-[#1b2f4a]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enviar Reporte a Fiscalización</span>
            </button>
          </form>
        )}

        {/* Ticket Confirmation Message */}
        {ticketCreated && (
          <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900">
            <div className="flex items-center gap-1.5 font-bold mb-1">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Denuncia Registrada: {ticketCreated}</span>
            </div>
            <p className="text-[11px] text-emerald-800 leading-tight">
              Su reporte ha sido derivado a los inspectores de campo de DIRCETUR y Policía de Turismo. Se dará seguimiento inmediato.
            </p>
          </div>
        )}
      </div>

      {/* UNESCO Heritage Protection Rules */}
      <div className="bg-amber-50/60 rounded-2xl border border-amber-200/80 p-4 mb-4">
        <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm mb-1">
          <Landmark className="w-4 h-4 text-amber-700" />
          <span>Normativa del Patrimonio de la Humanidad</span>
        </div>
        <p className="text-[11px] text-amber-800 mb-3">
          El Centro Histórico de Cusco fue declarado Patrimonio de la Humanidad por la UNESCO en 1983. Su preservación es deber de todos.
        </p>

        <div className="space-y-2 text-xs text-slate-700">
          <div className="p-2.5 bg-white rounded-xl border border-amber-100 flex items-start gap-2">
            <span className="font-bold text-amber-600">01.</span>
            <div>
              <strong className="text-slate-900 block">Prohibido tocar muros y mampostería inca:</strong>
              <span className="text-[11px] text-slate-600">El sudor y los aceites naturales de la piel humana degradan la roca milenaria andesita y caliza.</span>
            </div>
          </div>

          <div className="p-2.5 bg-white rounded-xl border border-amber-100 flex items-start gap-2">
            <span className="font-bold text-amber-600">02.</span>
            <div>
              <strong className="text-slate-900 block">Sanción por vandalismo o grafitis:</strong>
              <span className="text-[11px] text-slate-600">Pena privativa de la libertad de 3 a 8 años y multas de hasta 100 UIT según el Código Penal peruano (Art. 226).</span>
            </div>
          </div>

          <div className="p-2.5 bg-white rounded-xl border border-amber-100 flex items-start gap-2">
            <span className="font-bold text-amber-600">03.</span>
            <div>
              <strong className="text-slate-900 block">Exija el Carnet Oficial DIRCETUR:</strong>
              <span className="text-[11px] text-slate-600">Los guías autorizados portan credencial oficial con código QR y sello del Colegio de Licenciados en Turismo.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Directory of Emergency Contacts */}
      <div className="space-y-2">
        <h4 className="font-extrabold text-xs text-slate-700 uppercase tracking-wider px-1">
          Directorio Telefónico de Seguridad
        </h4>
        {EMERGENCY_CONTACTS.map((contact, idx) => (
          <div
            key={idx}
            className="p-3 bg-white rounded-xl border border-slate-200/80 flex items-center justify-between shadow-2xs"
          >
            <div>
              <h5 className="font-bold text-xs text-slate-900">{contact.name}</h5>
              <p className="text-[10px] text-slate-500">{contact.address}</p>
              <span className="text-[11px] font-mono font-bold text-[#0070ba] block mt-0.5">
                {contact.phone} {contact.mobile !== contact.phone ? `· ${contact.mobile}` : ''}
              </span>
            </div>
            <button
              onClick={() => handleSimulateCall(contact.name, contact.phone)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer transition-colors"
              title="Llamar"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
