export const auditLog = (action: string, loan: any) => {
  console.log(`Audit log: ${action} - ${JSON.stringify(loan)}`);
};