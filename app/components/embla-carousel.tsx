'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType } from 'embla-carousel';
import Image from 'next/image';
import { categories } from '@/app/lib/data';
import { LongFormLightbox } from './lightbox';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        loop: false
    })

    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const activeCategory = categories.find(cat => cat.id === selectedCategoryId);

    const scrollPrev = useCallback(() => {
        console.log("scrollPrev called");
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        console.log("scrollNext called");
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect(emblaApi);
        emblaApi.on('reInit', onSelect);
        emblaApi.on('select', onSelect);
    }, [emblaApi, onSelect]);

    useEffect(() => {
        if (selectedCategoryId !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedCategoryId]);

    const handleOpen = (catId: number) => {
        setSelectedCategoryId(catId);
        setCurrentImageIndex(0);
    };

    const handleClose = () => setSelectedCategoryId(null);

    const handleNext = () => {
        if (activeCategory) {
            setCurrentImageIndex((prev) => (prev + 1) % activeCategory.images.length);
        }
    };

    const handlePrev = () => {
        if (activeCategory) {
            setCurrentImageIndex((prev) =>
                (prev - 1 + activeCategory.images.length) % activeCategory.images.length
            );
        }
    };

    return (
        <div className="w-full mx-auto">
            <div className="overflow-hidden cursor-grab active:cursor-grabbing mb-5" ref={emblaRef}>
                <div className="flex gap-4">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 relative"
                        >
                            <div
                                className="group relative h-70 md:h-150 w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-300 cursor-pointer"
                                onClick={() => handleOpen(cat.id)}
                            >
                                <Image
                                    src={cat.thumb}
                                    alt={cat.title}
                                    fill
                                    sizes="100vw"
                                    className="object-cover md:opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                <div className="hidden md:flex absolute inset-0 border border-(--gray-700) bg-gradient-to-t from-black/80 via-black/50 via-40% to-transparent flex-col justify-end p-6">
                                    <h3 className="text-white tracking-tight">{cat.title}</h3>
                                    <span className="text-sm font-mono text-white mt-1">
                                        {cat.brands} — {cat.images.length} Samples
                                    </span>
                                    <p className="text-white text-sm mt-1">
                                        {cat.description}
                                    </p>
                                </div>
                            </div>
                            <div className="md:hidden p-4 flex flex-col">
                                <h3 className="text-(--gray-900)">{cat.title}</h3>
                                <span className="text-xs font-mono text-(--gray-700) mt-1">
                                    {cat.images.length} Samples
                                </span>
                                <p className="text-(--gray-700) text-sm mt-1">
                                    {cat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end gap-3 mb-6">
                <button
                    onClick={scrollPrev}
                    className={`p-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors ${prevBtnDisabled ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={scrollNext}
                    className={`p-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors ${nextBtnDisabled ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            <LongFormLightbox
                isOpen={selectedCategoryId !== null}
                images={activeCategory?.images || []}
                currentIndex={currentImageIndex}
                onClose={handleClose}
                onNext={handleNext}
                onPrev={handlePrev}
            />
        </div>
    );
};