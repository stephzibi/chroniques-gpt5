import Layout from '@/components/Layout';
import site from '@/data/site.json';

export default function Home() {
  return (
    <Layout>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: site.introHtml }} />
      <div className="mt-8">
        <a className="inline-block bg-black text-white px-4 py-2 rounded" href="/podcasts">
          Voir toutes les chroniques
        </a>
      </div>
    </Layout>
  );
}
