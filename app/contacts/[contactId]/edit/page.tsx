import { Suspense } from 'react';
import { getContactCache } from '@/data/services/getContact';
import { routes } from '@/validations/routeSchema';
import ContactForm, { ContactFormSkeleton } from './_components/ContactForm';

type PageProps = {
  params: unknown;
};

export default async function EditContactPage(props: PageProps) {
  const params = await props.params;
  const { contactId } = routes.contactIdEdit.$parseParams(params);
  const contact = getContactCache(contactId);

  return (
    <Suspense fallback={<ContactFormSkeleton />}>
      <ContactForm contactPromise={contact} />
    </Suspense>
  );
}
