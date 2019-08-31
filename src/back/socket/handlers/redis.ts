const connections:Map<string, string> = new Map([]);

const lookupBySocket = (value: string): string[] => {
  return Array.from(connections.entries()).find( ([ key, socket ]) => socket === value) || [];
};

const store = (login: string, socket: string): Map<string, string> => {
  return connections.set(login, socket);
};

const getFromStore = (value: string): string => {
  const socket = connections.get(value);

  return socket ? socket : lookupBySocket(value)[ 0 ];
};

const unstore = (value: string): boolean => {
  if (!connections.delete(value)) {
    return connections.delete(lookupBySocket(value)[ 0 ]);
  }

  return true;
};

const redis = {
  store,
  getFromStore,
  unstore,
};

export default redis;