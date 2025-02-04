import { StringFunction } from './models';

export const queryConstructFunction: StringFunction = {
  ts: `
export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string, operationName?: string) => (o: Record<any, any>) =>
  \`\${t.toLowerCase()}\${operationName ? ' ' + operationName : ''}\${inspectVariables(buildQuery(tName, o))}\`;
`,
};
