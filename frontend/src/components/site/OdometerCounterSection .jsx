import React, { useEffect, useRef } from 'react';
import Odometer from 'odometer';
import 'odometer/themes/odometer-theme-default.css';

const OdometerCounterSection = ({
    data = [],
    threshold = 0.4,
}) => {
    const sectionRef = useRef(null);
    const odometerRefs = useRef([]);
    const odometerInstances = useRef([]);

    useEffect(() => {
        odometerInstances.current = odometerRefs.current.map((el) => {
            return new Odometer({
                el,
                value: 0,
                format: '(,ddd).dd', // supports decimals like 1.5
                theme: 'default',
            });
        });

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        odometerInstances.current.forEach((od, i) => {
                            const val = parseFloat(data[i]?.value) || 0;
                            od.update(val);
                        });
                    }, 100);
                } else {
                    odometerInstances.current.forEach((od) => {
                        od.update(0);
                    });
                }
            },
            { threshold }
        );

        const current = sectionRef.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, [data, threshold]);

    return (
        <div
            ref={sectionRef}
            className="row g-md-5 g-3 counter-section justify-content-center"
        >
            {data.map((item, i) => (
                <div className="col-lg-3 col-6" key={i}>
                    <div className="d-flex gap-md-3 gap-1 align-items-center flex-md-row flex-column justify-content-center">
                        <h2 className="mb-0 d-flex align-items-center gap-1">
                            {item.prefix && <h2 className="mb-0">{item.prefix}</h2>}
                            <span
                                className="mb-0 counter odometer"
                                ref={(el) => (odometerRefs.current[i] = el)}
                            >
                                0
                            </span>
                            {item.suffix && <h2 className="mb-0">{item.suffix}</h2>}
                        </h2>
                        <p
                            className="mb-0"
                            dangerouslySetInnerHTML={{ __html: item.label }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OdometerCounterSection;
