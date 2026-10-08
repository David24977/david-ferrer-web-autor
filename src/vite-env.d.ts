declare module "*.json" {
  const value: Record<string, unknown> | Array<Record<string, unknown>>;
  export default value;
}