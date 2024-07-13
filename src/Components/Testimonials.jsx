import React from 'react';

const testimonials = [
    {
        name: 'Leslie Alexander',
        handle: '@lesliealexander',
        quote: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    },
    {
        name: 'Michael Foster',
        handle: '@michaelfoster',
        quote: 'Quia dolorem qui et. Atque quo aliquid sit eas officia. Dolores similique laboriosam quaerat cupiditate.',
    },
    {
        name: 'Dries Vincent',
        handle: '@driesvincent',
        quote: 'Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque. Ut quia eum fugit laborum autem inventore ut voluptate.',
    },
    {
        name: 'Brenna Goyette',
        handle: '@brennagoyette',
        quote: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc.',
        highlighted: true,
    },
    {
        name: 'Lindsay Walton',
        handle: '@lindsaywalton',
        quote: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure laudantium ipsa et officia rem nulla blanditiis.',
    },
    {
        name: 'Tom Cook',
        handle: '@tomcook',
        quote: 'Voluptas quos itaque ipsum in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
    },
    {
        name: 'Courtney Henry',
        handle: '@courtneyhenry',
        quote: 'Nam nesciunt dolorum dolor asperiores cum. Incidunt molestias qui deleniti vitae ut in eum delectus utso.',
    },
    {
        name: 'Whitney Francis',
        handle: '@whitneyfrancis',
        quote: 'Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.',
    },
    {
        name: 'Leonard Krasner',
        handle: '@leonardkrasner',
        quote: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepteur rerum voluptate minus harum.',
    },
    {
        name: 'Floyd Miles',
        handle: '@floydmiles',
        quote: 'Architecto libero natus est. Est quam debitis officia enim atque et ut rerum. Sunt reiciendis quasi eaque. Itaque error ut et.',
    },
    {
        name: 'Emily Selman',
        handle: '@emilyselman',
        quote: 'Temporibus ea molestiae impedit adipisci perspiciatis illo aliquid. Quis ut ratione et voluptatem et. Nostrum explicabo iste unde beatae.',
    }
];

const Testimonials = () => {
    return (
        <section className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-base font-semibold text-indigo-600">Testimonials</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        We have worked with thousands of amazing people
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`bg-white shadow-lg rounded-lg p-6 ${testimonial.highlighted ? 'lg:col-span-3' : ''}`}>
                            <blockquote className="text-lg text-gray-700 italic mb-4">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 1}.jpg`} alt="" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.handle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
