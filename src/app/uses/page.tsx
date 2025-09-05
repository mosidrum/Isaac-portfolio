import { workStations, softwares } from '../../utils';

const page = () => (
  <div className="d-flex flex-column gap-5">
    <div className="mb-2 text-2xl">Uses</div>
    <div>
      This page draws inspiration from{' '}
      <a
        className="text-decoration-none text-secondary"
        href="https://uses.tech"
        target="_blank"
        rel="noopener noreferrer"
      >
        Wes Bos&apos;s Uses.Tech
      </a>{' '}
      project, a collection of developer&apos;s setup, hardware and software.
    </div>
    <div className="d-flex justify-content-between">
      <div>
        <div className="text-xl font-bold">Workstation</div>
        {workStations.map((station, index) => (
          <div key={index} className="ml-5 mv-2">
            <div className="text-lg mb-1 font-bold text-secondary">{station.type}</div>
            <span className="ml-2 text-white"> - {station.desc}</span>
          </div>
        ))}
      </div>
      <div>
        <div className="text-xl font-bold">Software</div>
        {softwares.map((software, index) => (
          <div key={index} className="ml-5 mv-2">
            <div className="text-lg mb-1 font-bold text-secondary">{software.type}</div>
            <span className="ml-2 text-white"> - {software.desc}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default page;
