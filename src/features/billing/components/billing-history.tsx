import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'

const invoices = [
  {
    id: 'INV-001',
    date: 'February 15, 2026',
    amount: '$112.49',
    status: 'Paid',
    description: 'Professional Plan + Overage',
  },
  {
    id: 'INV-002',
    date: 'January 15, 2026',
    amount: '$105.75',
    status: 'Paid',
    description: 'Professional Plan + Overage',
  },
  {
    id: 'INV-003',
    date: 'December 15, 2025',
    amount: '$99.99',
    status: 'Paid',
    description: 'Professional Plan',
  },
  {
    id: 'INV-004',
    date: 'November 15, 2025',
    amount: '$99.99',
    status: 'Paid',
    description: 'Professional Plan',
  },
  {
    id: 'INV-005',
    date: 'October 15, 2025',
    amount: '$99.99',
    status: 'Paid',
    description: 'Professional Plan',
  },
]

export function BillingHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoice History</CardTitle>
        <CardDescription>
          View and download your past invoices
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='overflow-x-auto'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className='text-right'>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className='font-medium'>{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.description}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    <span className='rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800'>
                      {invoice.status}
                    </span>
                  </TableCell>
                  <TableCell className='text-right'>
                    <Button variant='ghost' size='sm'>
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
