import { DEFAULT_MCP_CONFIG, McpConfigData, ServerStatusResponse } from "./types";

const unavailable = (): never => {
  throw new Error("MCP is not available in the desktop app");
};

export async function getClientsStatus(
  _accessCode: string,
): Promise<Record<string, ServerStatusResponse>> {
  return {};
}

export async function getClientTools(_clientId: string, _accessCode: string) {
  return null;
}

export async function getAvailableClientsCount(_accessCode: string) {
  return 0;
}

export async function getAllTools(_accessCode: string) {
  return [];
}

export async function initializeMcpSystem(_accessCode: string) {
  return undefined;
}

export async function addMcpServer(..._args: unknown[]) {
  return unavailable();
}

export async function pauseMcpServer(..._args: unknown[]) {
  return unavailable();
}

export async function resumeMcpServer(..._args: unknown[]): Promise<void> {
  return unavailable();
}

export async function removeMcpServer(..._args: unknown[]) {
  return unavailable();
}

export async function restartAllClients(..._args: unknown[]) {
  return unavailable();
}

export async function executeMcpAction(..._args: unknown[]) {
  return unavailable();
}

export async function getMcpConfigFromFile(
  _accessCode: string,
): Promise<McpConfigData> {
  return DEFAULT_MCP_CONFIG;
}

export async function isMcpEnabled() {
  return false;
}
