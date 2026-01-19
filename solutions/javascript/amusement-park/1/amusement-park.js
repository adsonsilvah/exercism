export function createVisitor(name, age, ticketId) {
  let Visitor = {
    name,
    age,
    ticketId
  }
  return Visitor;
}

export function revokeTicket(visitor) {
  visitor.ticketId = null
  return visitor;
}

export function ticketStatus(tickets, ticketId) {
 if (!(ticketId in tickets)) {
    return 'unknown ticket id';
  }

  if (tickets[ticketId] === null) {
    return 'not sold';
  }

  return `sold to ${tickets[ticketId]}`;
}

export function simpleTicketStatus(tickets, ticketId) {
  if (!(ticketId in tickets) || tickets[ticketId] === null) {
    return 'invalid ticket !!!';
  }
  return tickets[ticketId];
}

export function gtcVersion(visitor) {
  return visitor.gtc?.version;
}
